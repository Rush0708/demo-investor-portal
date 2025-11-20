using DemoInvestorPortal.Models.RequestModels;
using DemoInvestorPortal.Repository.Interface;
using DemoInvestorPortal.Services.Interfaces;
using Repository.Interface;
//using Services.Interfaces;
using System.Threading.Tasks;
using Services.Interfaces;



    public class InvestorDataService : IInvestorDataService
    {
        private readonly IInvestorDataRepository _investorDataRepository;
        public InvestorDataService(IInvestorDataRepository investorDataRepository)
        {
            _investorDataRepository = investorDataRepository;
        }
        public async Task<int>CheckInvestorData(GetInvestorDataRequest getInvestorDataRequest)
        {
            var dataExists = await _investorDataRepository.CheckInvestorData(getInvestorDataRequest);
            return dataExists;
        }

    }


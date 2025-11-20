using DemoInvestorPortal.Models.RequestModels;
using DemoInvestorPortal.Repository.Interface;
using DemoInvestorPortal.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DemoInvestorPortal.Services
{
    public class InvestorService : IInvestorService
    {
        private readonly IInvestorRepository _investorRepository;
        public InvestorService(IInvestorRepository investorRepository)
        {
            _investorRepository = investorRepository;
        }

        public async Task<int> AddInvestor(AddInvestorDataRequest addInvestorDataRequest)
        {
            try
            {
                var res = await _investorRepository.AddInvestor(addInvestorDataRequest);
                return res;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
    }
}

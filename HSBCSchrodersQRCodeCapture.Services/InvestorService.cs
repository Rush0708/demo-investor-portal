using HSBCSchrodersQRCodeCapture.Models.RequestModels;
using HSBCSchrodersQRCodeCapture.Repository.Interface;
using HSBCSchrodersQRCodeCapture.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HSBCSchrodersQRCodeCapture.Services
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

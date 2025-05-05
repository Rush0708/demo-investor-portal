using HSBCSchrodersQRCodeCapture.Models.RequestModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HSBCSchrodersQRCodeCapture.Repository.Interface
{
    public interface IInvestorRepository
    {
        Task<int> AddInvestor(AddInvestorDataRequest addInvestorDataRequest);
    }
}

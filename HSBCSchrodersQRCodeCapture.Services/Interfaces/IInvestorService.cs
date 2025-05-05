using HSBCSchrodersQRCodeCapture.Models.RequestModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HSBCSchrodersQRCodeCapture.Services.Interfaces
{
    public interface IInvestorService
    {
        Task<int> AddInvestor(AddInvestorDataRequest addInvestorDataRequest);
    }
}

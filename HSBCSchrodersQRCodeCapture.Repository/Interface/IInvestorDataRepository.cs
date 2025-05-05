using HSBCSchrodersQRCodeCapture.Models.RequestModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HSBCSchrodersQRCodeCapture.Repository.Interface
{
    public interface  IInvestorDataRepository
    {
        Task<int> CheckInvestorData(GetInvestorDataRequest request);
        //Task<int> GetInvestorId(string investorName);


    }
}

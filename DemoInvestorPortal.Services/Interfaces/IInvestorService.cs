using DemoInvestorPortal.Models.RequestModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DemoInvestorPortal.Services.Interfaces
{
    public interface IInvestorService
    {
        Task<int> AddInvestor(AddInvestorDataRequest addInvestorDataRequest);
    }
}

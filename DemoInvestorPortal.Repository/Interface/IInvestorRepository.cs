using DemoInvestorPortal.Models.RequestModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DemoInvestorPortal.Repository.Interface
{
    public interface IInvestorRepository
    {
        Task<int> AddInvestor(AddInvestorDataRequest addInvestorDataRequest);
    }
}

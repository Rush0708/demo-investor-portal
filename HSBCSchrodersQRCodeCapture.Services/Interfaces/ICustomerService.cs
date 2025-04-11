using Carling_ClaimYourShirt.Models.RequestModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Carling_ClaimYourShirt.Services.Interfaces
{
    public interface ICustomerService
    {
        Task<int> AddCustomer(AddCustomerDataRequest addCustomerDataRequest);
    }
}

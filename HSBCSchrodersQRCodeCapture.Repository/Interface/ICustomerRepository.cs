using Carling_ClaimYourShirt.Models.RequestModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Carling_ClaimYourShirt.Repository.Interface
{
    public interface  ICustomerRepository
    {
        Task<int> AddCustomer(AddCustomerDataRequest addCustomerDataRequest);
    }
}

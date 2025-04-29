using HSBCSchrodersQRCodeCapture.Models.RequestModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HSBCSchrodersQRCodeCapture.Services.Interfaces
{
    public interface ICustomerService
    {
        Task<int> AddCustomer(AddCustomerDataRequest addCustomerDataRequest);
    }
}

using HSBCSchrodersQRCodeCapture.Models.RequestModels;
using HSBCSchrodersQRCodeCapture.Repository.Interface;
using HSBCSchrodersQRCodeCapture.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HSBCSchrodersQRCodeCapture.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly ICustomerRepository _customerRepository;
        public CustomerService(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        public async Task<int> AddCustomer(AddCustomerDataRequest addCustomerDataRequest)
        {
            try
            {
                var res = await _customerRepository.AddCustomer(addCustomerDataRequest);
                return res;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
    }
}

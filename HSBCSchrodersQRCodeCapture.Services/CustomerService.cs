using Carling_ClaimYourShirt.Models.RequestModels;
using Carling_ClaimYourShirt.Repository.Interface;
using Carling_ClaimYourShirt.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Carling_ClaimYourShirt.Services
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

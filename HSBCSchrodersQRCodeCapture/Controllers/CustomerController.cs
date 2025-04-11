using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Carling_ClaimYourShirt.Models.RequestModels;
using Carling_ClaimYourShirt.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Carling_ClaimYourShirt.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService _customerService;
        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;
        }
        [HttpPost]
        [Route("Insert")]
        public async Task<IActionResult> AddCustomer([FromBody] AddCustomerDataRequest addCustomerDataRequest)
        {
            try
            {
                var addCustomerResult = await _customerService.AddCustomer(addCustomerDataRequest);
                return Ok(addCustomerResult);
            }
            catch (Exception exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, exception);
            }
        }
    }
}

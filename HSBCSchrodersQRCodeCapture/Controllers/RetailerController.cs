using Carling_ClaimYourShirt.Models;
using Carling_ClaimYourShirt.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace Carling_ClaimYourShirt.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RetailerController : ControllerBase
    {
        private readonly IRetailerService _retailerService;
        public RetailerController(IRetailerService retailerService)
        {
            _retailerService = retailerService;
        }

        [HttpGet]
        [Route("GetRetailers")]
        public IList<RetailerModel> LoadRetailers()
        {
            try
            {
                var retailerList = _retailerService.LoadRetailers();
                return retailerList;
            }
            catch (Exception exception)
            {
                return null;
            }
        }
    }
}

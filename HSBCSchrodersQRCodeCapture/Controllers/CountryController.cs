using HSBCSchrodersQRCodeCapture.Models;
using HSBCSchrodersQRCodeCapture.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace HSBCSchrodersQRCodeCapture.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CountryController : ControllerBase
    {
        private readonly ICountryService _countryService;
        public CountryController(ICountryService countryService)
        {
            _countryService = countryService;
        }

        [HttpGet]
        [Route("GetCountries")]
        public IList<CountryModel> LoadCountries()
        {
            try
            {
                var countryList = _countryService.LoadCountries();
                return countryList;
            }
            catch (Exception exception)
            {
                return null;
            }
        }
    }
}

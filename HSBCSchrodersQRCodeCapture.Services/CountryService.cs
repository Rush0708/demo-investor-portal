using System.Collections.Generic;
using Carling_ClaimYourShirt.Models;
using Carling_ClaimYourShirt.Services.Interfaces;
using Carling_ClaimYourShirt.Repository.Interface;

namespace Carling_ClaimYourShirt.Services
{
    public class CountryService : ICountryService
    {
        private readonly ICountryRepository _countryRepository;
        public CountryService(ICountryRepository countryRepository)
        {
            _countryRepository = countryRepository;
        }
        public IList<CountryModel> LoadCountries()
        {
            var countryList = this._countryRepository.LoadCountries();
            return countryList;
        }
    }
}

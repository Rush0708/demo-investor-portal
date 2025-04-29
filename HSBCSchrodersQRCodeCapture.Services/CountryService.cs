using System.Collections.Generic;
using HSBCSchrodersQRCodeCapture.Models;
using HSBCSchrodersQRCodeCapture.Services.Interfaces;
using HSBCSchrodersQRCodeCapture.Repository.Interface;

namespace HSBCSchrodersQRCodeCapture.Services
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

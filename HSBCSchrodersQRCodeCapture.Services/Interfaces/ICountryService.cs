using System.Collections.Generic;
using HSBCSchrodersQRCodeCapture.Models;

namespace HSBCSchrodersQRCodeCapture.Services.Interfaces
{
    public interface ICountryService
    {
        IList<CountryModel> LoadCountries();
    }
}

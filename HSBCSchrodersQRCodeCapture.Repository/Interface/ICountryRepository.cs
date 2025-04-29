using HSBCSchrodersQRCodeCapture.Models;
using System.Collections.Generic;

namespace HSBCSchrodersQRCodeCapture.Repository.Interface
{
    public interface  ICountryRepository
    {
        IList<CountryModel> LoadCountries();
    }
}

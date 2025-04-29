using System.Collections.Generic;
using HSBCSchrodersQRCodeCapture.Models;

namespace HSBCSchrodersQRCodeCapture.Services.Interfaces
{
    public interface IRetailerService
    {
        IList<RetailerModel> LoadRetailers();
    }
}

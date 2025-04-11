using System.Collections.Generic;
using Carling_ClaimYourShirt.Models;

namespace Carling_ClaimYourShirt.Services.Interfaces
{
    public interface IRetailerService
    {
        IList<RetailerModel> LoadRetailers();
    }
}

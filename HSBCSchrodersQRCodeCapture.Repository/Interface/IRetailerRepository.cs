using Carling_ClaimYourShirt.Models;
using System.Collections.Generic;

namespace Carling_ClaimYourShirt.Repository.Interface
{
    public interface IRetailerRepository
    {
        IList<RetailerModel> LoadRetailers();
    }
}

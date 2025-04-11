using Carling_ClaimYourShirt.Models;
using System.Collections.Generic;

namespace Repository.Interface
{
    public interface IShirtSizeRepository
    {
        IList<ShirtSizeModel> LoadShirtsizes(int competitionid);
    }
}

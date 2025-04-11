using System;
using System.Collections.Generic;
using System.Text;
using Carling_ClaimYourShirt.Models;

namespace Services.Interfaces
{
    public interface  IShirtSizeService
    {
        IList<ShirtSizeModel> LoadShirtsizes(int competitionid);
    }
}

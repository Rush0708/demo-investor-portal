using Services.Interfaces;
using System.Collections.Generic;
using Carling_ClaimYourShirt.Models;
using Repository.Interface;

namespace Services
{
    public class ShirtSizeService : IShirtSizeService
    {
        private readonly IShirtSizeRepository _shirtSizeRepository;
        public ShirtSizeService(IShirtSizeRepository shirtSizeRepository)
        {
            _shirtSizeRepository = shirtSizeRepository;
        }
        public IList<ShirtSizeModel> LoadShirtsizes(int competitionid)
        {
            var shirtSizeList = this._shirtSizeRepository.LoadShirtsizes(competitionid);
            return shirtSizeList;
        }
    }
}

using System.Collections.Generic;
using Carling_ClaimYourShirt.Models;
using Carling_ClaimYourShirt.Services.Interfaces;
using Carling_ClaimYourShirt.Repository.Interface;

namespace Carling_ClaimYourShirt.Services
{
    public class RetailerService : IRetailerService
    {
        private readonly IRetailerRepository _retailerRepository;
        public RetailerService(IRetailerRepository retailerRepository)
        {
            _retailerRepository = retailerRepository;
        }
        public IList<RetailerModel> LoadRetailers()
        {
            var retailerList = this._retailerRepository.LoadRetailers();
            return retailerList;
        }
    }
}

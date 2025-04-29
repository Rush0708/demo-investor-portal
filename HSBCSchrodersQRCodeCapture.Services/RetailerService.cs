using System.Collections.Generic;
using HSBCSchrodersQRCodeCapture.Models;
using HSBCSchrodersQRCodeCapture.Services.Interfaces;
using HSBCSchrodersQRCodeCapture.Repository.Interface;

namespace HSBCSchrodersQRCodeCapture.Services
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

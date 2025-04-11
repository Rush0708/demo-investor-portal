using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PAFService;

using Carling_ClaimYourShirt.Models;
using System.Net;

namespace Carling_ClaimYourShirt.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AddressFinderController : ControllerBase
    {
        [HttpGet]
        [Route("Addressfinder/{postcode}")]       
        public  IList<string[]> GetAddressList(string postcode)
        {
            try
            {
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
                var postCodeEverywhere = new clsPAFSoapClient(clsPAFSoapClient.EndpointConfiguration.clsPAFSoap);
                var pafAddressList = postCodeEverywhere.GetAddressesByPostcodeAsync(postcode).Result;

                return pafAddressList.GetAddressesByPostcodeResult;
            }
            catch(Exception ex)
            {
                return null;
            }
        }

    }
}

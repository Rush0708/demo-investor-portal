using System;
using Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Carling_ClaimYourShirt.Models;

namespace Carling_ClaimYourShirt.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ShirtSizeController : ControllerBase
    {
        private readonly IShirtSizeService _shirtSizeService;
        public ShirtSizeController(IShirtSizeService shirtSizeService)
        {
            _shirtSizeService = shirtSizeService;
        }

        [HttpGet]
        [Route("ShirtSizes/{competitionId}")]
        public IList<ShirtSizeModel> LoadShirtsizes(int competitionId)
        {
            try
            {
                var shirtSizeList = _shirtSizeService.LoadShirtsizes(competitionId);
                return shirtSizeList;
            }
            catch (Exception exception)
            {
                return null;
            }
        }
    }
}

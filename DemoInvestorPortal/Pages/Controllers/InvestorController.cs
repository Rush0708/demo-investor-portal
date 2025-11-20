using System;
using System.Threading.Tasks;
using DemoInvestorPortal.Models.RequestModels;
using DemoInvestorPortal.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DemoInvestorPortal.Controllers
{
    [ApiController]
    public class InvestorController : ControllerBase
    {
        private readonly IInvestorService _investorService;

        public InvestorController(IInvestorService investorService)
        {
            _investorService = investorService;
        }

        [HttpPost("InsertInvestorData")]
        public async Task<IActionResult> AddInvestor([FromBody] AddInvestorDataRequest addInvestorDataRequest)
        {
            try
            {
                var addInvestorResult = await _investorService.AddInvestor(addInvestorDataRequest);
                return Ok(addInvestorResult);
            }
            catch (Exception exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { error = exception.Message });
            }
        }
    }
}

using System;
using System.Threading.Tasks;
using Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using HSBCSchrodersQRCodeCapture.Models.RequestModels;
using HSBCSchrodersQRCodeCapture.Services.Interfaces;

namespace HSBCSchrodersQRCodeCapture.Controllers
{
    [ApiController]
    public class InvestorDataController : ControllerBase
    {
        private readonly IInvestorDataService _investorDataService;

        public InvestorDataController(IInvestorDataService investorDataService)
        {
            _investorDataService = investorDataService;
        }

        [HttpGet("Investors/{investorID}")]
        public async Task<IActionResult> CheckInvestorData(string investorID)
        {
            try
            {
                var request = new GetInvestorDataRequest
                {
                    InvestorID = investorID
                };

                var result = await _investorDataService.CheckInvestorData(request);

                if (result == 0)
                {
                    return Ok(new { isValid = true });
                }
                else if (result == 2)
                {
                    return BadRequest(new { isValid = false });
                }
                else
                {
                    return NotFound(new { isValid = false });
                }

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}
using HSBCSchrodersQRCodeCapture.Models.RequestModels;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IInvestorDataService
    {
        Task<int>CheckInvestorData(GetInvestorDataRequest request);
    }
}

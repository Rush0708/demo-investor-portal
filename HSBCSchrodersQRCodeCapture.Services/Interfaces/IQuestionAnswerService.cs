using System.Collections.Generic;
using HSBCSchrodersQRCodeCapture.Models;

namespace HSBCSchrodersQRCodeCapture.Services.Interfaces
{
    public interface IQuestionAnswerService
    {
        IList<QuestionModel> GetQuestions(int competitionId);
        IList<AnswerModel> GetAnswers(int questionId);
    }
}

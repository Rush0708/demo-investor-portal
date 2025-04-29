using HSBCSchrodersQRCodeCapture.Models;
using System.Collections.Generic;

namespace HSBCSchrodersQRCodeCapture.Repository.Interface
{
    public interface IQuestionAnswerRepository
    {
        IList<QuestionModel> GetQuestions(int competitionId);
        IList<AnswerModel> GetAnswers(int questionId);
    }
}

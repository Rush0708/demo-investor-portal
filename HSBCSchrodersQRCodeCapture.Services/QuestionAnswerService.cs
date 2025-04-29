using System.Collections.Generic;
using HSBCSchrodersQRCodeCapture.Models;
using HSBCSchrodersQRCodeCapture.Services.Interfaces;
using HSBCSchrodersQRCodeCapture.Repository.Interface;

namespace HSBCSchrodersQRCodeCapture.Services
{
    public class QuestionAnswerService : IQuestionAnswerService
    {
        private readonly IQuestionAnswerRepository _questionAnswerRepository;
        public QuestionAnswerService(IQuestionAnswerRepository questionAnswerRepository)
        {
            _questionAnswerRepository = questionAnswerRepository;
        }
        public IList<QuestionModel> GetQuestions(int competitionid)
        {
            var questionList = this._questionAnswerRepository.GetQuestions(competitionid);
            return questionList;
        }

        public IList<AnswerModel> GetAnswers(int questionId)
        {
            var answerList = this._questionAnswerRepository.GetAnswers(questionId);
            return answerList;
        }
    }
}

using System;
using System.Threading.Tasks;
using Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using HSBCSchrodersQRCodeCapture.Models;
using System.Collections.Generic;
using HSBCSchrodersQRCodeCapture.Services.Interfaces;

namespace HSBCSchrodersQRCodeCapture.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class QuestionAnswerController : ControllerBase
    {
        private readonly IQuestionAnswerService _questionanswerService;    
        public QuestionAnswerController(IQuestionAnswerService questionanswerService)
        {
            _questionanswerService = questionanswerService;           
        }

        [HttpGet]
        [Route("Questions/{competitionId}")]
        public IList<QuestionModel> GetQuestions(int competitionId)
        {
            try
            {
                var questionsList = _questionanswerService.GetQuestions(competitionId);
                return questionsList;
            }
            catch (Exception exception)
            {
                return null;
            }
        }

        [HttpGet]
        [Route("Answers/{questionId}")]
        public IList<AnswerModel> GetAnswers(int questionId)
        {
            try
            {
                var answerList = _questionanswerService.GetAnswers(questionId);
                return answerList;
            }
            catch (Exception exception)
            {
                return null;
            }
        }

    }
}

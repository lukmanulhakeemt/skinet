using System;

namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message=null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessageForStatusCode(statusCode);
        }

       
        public int StatusCode { get; set; }
        public string Message { get; set; }

         private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch{
                400=>"A bad request, you have made",
                401=>"authorized, you are not",
                404=>"resource found, it was not",
                405=>"method syntax, not allowed",
                407=>"authentication, you are not",
                500=>"errors are the path to dark side, errors lead to anger, anger leads to hate,"+
                     "hate leads to career change",
                _=>null

            };
        }

    }
}
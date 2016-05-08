using System;
using System.Net.Http;
using System.Net.Http.Headers;

namespace CarQueries.Helpers
{
    public class APIHelper
    {
        public static HttpClient GetHttpClient(string apiUrl)
        {
            HttpClient client = new HttpClient();

            client.BaseAddress = new Uri(apiUrl);
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            return client;
        }
    }
}
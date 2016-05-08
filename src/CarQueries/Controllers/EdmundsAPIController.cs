using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.Net.Http.Headers;
using Microsoft.Extensions.OptionsModel;
using CarQueries.Models;
using CarQueries.Helpers;

namespace CarQueries.Controllers
{
    [Route("api/[controller]")]
    public class EdmundsAPIController : Controller
    {
        private EdmundsAPISettings settings;

        public EdmundsAPIController(IOptions<EdmundsAPISettings> Settings)
        {
            settings = Settings.Value;
        }

        [HttpGet]
        [Route("GetAllMakes")]
        public async Task<ContentResult> GetAllMakes()
        {
            using (var client = APIHelper.GetHttpClient(settings.APIUrl))
            {
                var response = await client.GetAsync(string.Format(settings.VehicleV2 + "makes?fmt=json&api_key=" + settings.ClientID));

                if (response.IsSuccessStatusCode)
                {
                    var jsonResponse = response.Content.ReadAsStringAsync().Result;
                    return new ContentResult { Content = jsonResponse, ContentType = new MediaTypeHeaderValue("application/json") };
                }

                return new ContentResult();
            }
        }

        [HttpGet]
        [Route("GetVehicleDetails")]
        public async Task<ContentResult> GetVehicleDetails(string make, string model, string year)
        {
            using (var client = APIHelper.GetHttpClient(settings.APIUrl))
            {
                var response = await client.GetAsync(string.Format(settings.VehicleV2 + "/" + make + "/" + model + "/" + year + "styles?fmt=json&api_key=" + settings.ClientID));

                if (response.IsSuccessStatusCode)
                {
                    var jsonResponse = response.Content.ReadAsStringAsync().Result;
                    return new ContentResult { Content = jsonResponse, ContentType = new MediaTypeHeaderValue("application/json") };
                }

                return new ContentResult();
            }
        }
    }
}
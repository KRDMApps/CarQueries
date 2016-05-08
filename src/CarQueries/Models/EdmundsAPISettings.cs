using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarQueries.Models
{
    public class EdmundsAPISettings
    {
        public string APIUrl { get; set; }
        public string VehicleV2 { get; set; }
        public string DealerV2 { get; set; }
        public string InventoryV2 { get; set; }
        public string EditorialV2 { get; set; }
        public string MediaV2 { get; set; }
        public string ClientID { get; set; }
        public string ClientSecret { get; set; }
        public string RedirectURI { get; set; }
    }
}

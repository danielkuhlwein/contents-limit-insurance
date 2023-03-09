using Models;
using Newtonsoft.Json;
using StackExchange.Redis;

namespace Redis
{
	public class CacheService : ICacheService
	{
		private IDatabase _db;

		public CacheService()
		{
			_db = ConnectionHelper.Connection.GetDatabase();
			InsertSampleData();
		}

		public T GetData<T>(string key)
		{
			var value = _db.StringGet(key);
			if (!string.IsNullOrEmpty(value))
			{
				return JsonConvert.DeserializeObject<T>(value);
			}
			return default;
		}

		public bool SetData<T>(string key, T value, DateTimeOffset expirationTime)
		{
			TimeSpan expiryTime = expirationTime.DateTime.Subtract(DateTime.Now);
			var isSet = _db.StringSet(key, JsonConvert.SerializeObject(value), expiryTime);
			return isSet;
		}

		public object RemoveData(string key)
		{
			bool _isKeyExist = _db.KeyExists(key);
			if (_isKeyExist == true)
			{
				return _db.KeyDelete(key);
			}
			return false;
		}

		/// <summary>
		/// For testing purposes, insert sample data into the cache
		/// </summary>
		private void InsertSampleData()
		{
			var expirationTime = DateTimeOffset.Now.AddMinutes(5.0);

			// Categories
			var contentCategories = new List<string>() {
				"Furniture",
				"Electronics",
				"Appliances",
				"Kitchen",
				"Clothing",
				"Jewelry",
				"ArtAndCollectibles",
				"SportsEquipment",
				"MusicalInstruments",
				"BooksAndMedia",
				"Other"
			};
			var categories = new List<ContentsLimitInsuranceCategory>();
			for (int i = 0; i < contentCategories.Count; i++)
			{
				categories.Add(new ContentsLimitInsuranceCategory()
				{
					Id = i + 1,
					Name = contentCategories[i]
				});
				SetData<IEnumerable<ContentsLimitInsuranceCategory>>("contentsLimitInsuranceCategories", categories, expirationTime);
			}

			// Items
			var items = new List<ContentsLimitInsurance>()
			{
				new ContentsLimitInsurance()
				{
					Id = 1,
					Name = "TV",
					Price = 2000,
					Category = categories.Find(x => x.Name == "Electronics")
				},
				new ContentsLimitInsurance()
				{
					Id = 2,
					Name = "Playstation",
					Price = 400,
					Category = categories.Find(x => x.Name == "Electronics")
				},
				new ContentsLimitInsurance()
				{
					Id = 3,
					Name = "Stereo",
					Price = 1600,
					Category = categories.Find(x => x.Name == "Electronics")
				},
				new ContentsLimitInsurance()
				{
					Id = 4,
					Name = "Shirts",
					Price = 1100,
					Category = categories.Find(x => x.Name == "Clothing")
				},
				new ContentsLimitInsurance()
				{
					Id = 4,
					Name = "Jeans",
					Price = 1100,
					Category = categories.Find(x => x.Name == "Clothing")
				},
				new ContentsLimitInsurance()
				{
					Id = 5,
					Name = "Pots and Pans",
					Price = 3000,
					Category = categories.Find(x => x.Name == "Kitchen")
				},
				new ContentsLimitInsurance()
				{
					Id = 6,
					Name = "Flatware",
					Price = 500,
					Category = categories.Find(x => x.Name == "Kitchen")
				},
				new ContentsLimitInsurance()
				{
					Id = 7,
					Name = "Knife Set",
					Price = 500,
					Category = categories.Find(x => x.Name == "Kitchen")
				},
				new ContentsLimitInsurance()
				{
					Id = 8,
					Name = "Misc",
					Price = 1000,
					Category = categories.Find(x => x.Name == "Kitchen")
				},
			};
			SetData<IEnumerable<ContentsLimitInsurance>>("contentsLimitInsuranceItems", items, expirationTime);
		}
	}
}
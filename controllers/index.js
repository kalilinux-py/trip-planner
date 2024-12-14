const { Itinerary, ItineraryItem, Flight, Hotel, Site } = require("../models");
const { errorHandler, HttpError } = require("../utils/error-handler");
const response = require("../utils/response");
const axiosInstance = require("../services/axios");

const createItinerary = (req, res) => {
  const { flights, hotels, sites, name } = req.body;
  errorHandler(res, async () => {
    const createdItinerary = await Itinerary.create({ name });

    // Create Flight and Itinerary Item
    if (flights && flights.length > 0) {
      for (const flight of flights) {
        const createdFlight = await Flight.create(flight);
        await ItineraryItem.create({
          itineraryId: createdItinerary.id,
          itemId: createdFlight.id,
          type: "flight",
        });
      }
    }

    // Create Hotel and Itinerary Item
    if (hotels && hotels.length > 0) {
      for (const hotel of hotels) {
        const createdHotel = await Hotel.create(hotel);
        await ItineraryItem.create({
          itineraryId: createdItinerary.id,
          itemId: createdHotel.id,
          type: "hotel",
        });
      }
    }

    // Create Site and Itinerary Item
    if (sites && sites.length > 0) {
      for (const site of sites) {
        const createdSite = await Site.create(site);
        await ItineraryItem.create({
          itineraryId: createdItinerary.id,
          itemId: createdSite.id,
          type: "site",
        });
      }
    }

    response({
      res,
      status: 201,
      message: "Itinerary created",
      itinerary: createdItinerary,
    });
  });
};

const getHotels = (req, res) => {
  errorHandler(res, async () => {
    const hotels = await axiosInstance.get("/hotels");
    response({ res, hotels });
  });
};

const getFlights = (req, res) => {
  errorHandler(res, async () => {
    const flights = await axiosInstance.get("/flights");
    response({ res, flights });
  });
};

const getSites = (req, res) => {
  errorHandler(res, async () => {
    const sites = await axiosInstance.get("/sites");
    response({ res, sites });
  });
};

module.exports = {
  createItinerary,
  getHotels,
  getFlights,
  getSites,
};

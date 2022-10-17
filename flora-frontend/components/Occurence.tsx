import React from "react";
import Clock from "react-clock";

export default function Occurence({ occurence }) {
  let date = new Date(Date.parse(occurence.eventDate));

  return (
    <div className="rounded-md bg-black text-white p-4 mb-2 w-3/4 m-auto">
      <p className="text-gray-300 font-light text-sm">
        {date.toDateString()} -{" "}
        {convertDMS(occurence.decimalLatitude, occurence.decimalLongitude)}
      </p>
      <h1 className="font-bold">{occurence.scientificName}</h1>
      <h2 className="font-medium text-base">{occurence.recordedBy}</h2>
    </div>
  );

  function convertDMS(lat, lng) {
    var latitude = toDegreesMinutesAndSeconds(lat);
    var latitudeCardinal = lat >= 0 ? "N" : "S";

    var longitude = toDegreesMinutesAndSeconds(lng);
    var longitudeCardinal = lng >= 0 ? "E" : "W";

    return (
      latitude +
      " " +
      latitudeCardinal +
      "\n" +
      longitude +
      " " +
      longitudeCardinal
    );
  }

  function toDegreesMinutesAndSeconds(coordinate) {
    var absolute = Math.abs(coordinate);
    var degrees = Math.floor(absolute);
    var minutesNotTruncated = (absolute - degrees) * 60;
    var minutes = Math.floor(minutesNotTruncated);
    var seconds = Math.floor((minutesNotTruncated - minutes) * 60);

    return degrees + "° " + minutes + "' " + seconds + '"';
  }
}

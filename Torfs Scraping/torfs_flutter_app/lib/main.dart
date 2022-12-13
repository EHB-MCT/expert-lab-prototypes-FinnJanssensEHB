import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

Future<List<Data>> fetchData() async {
  final response = await http.get(Uri.parse("http://localhost:3000/schoenen"));
  if (response.statusCode == 200) {
    List jsonResponse = json.decode(response.body);
    return jsonResponse.map((data) => Data.fromJson(data)).toList();
  } else {
    throw Exception('Unexpected error occured!');
  }
}

class Data {
  final String brand;
  final String type;
  final String price;
  final String imageUrl;

  Data(
      {required this.brand,
      required this.type,
      required this.price,
      required this.imageUrl});

  factory Data.fromJson(Map<String, dynamic> json) {
    return Data(
      brand: json['brand'],
      type: json['type'],
      price: json['price'],
      imageUrl: json['imageURL'],
    );
  }
}

void main() => runApp(const MyApp());

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  late Future<List<Data>> futureData;

  @override
  void initState() {
    super.initState();
    futureData = fetchData();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter API and ListView Example',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Torfs'),
        ),
        body: Center(
          child: FutureBuilder<List<Data>>(
            future: futureData,
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                List<Data> data = snapshot.data as List<Data>;
                return ListView.builder(
                    itemCount: data.length,
                    itemBuilder: (BuildContext context, int index) {
                      return Card(
                          elevation: 6,
                          margin: const EdgeInsets.all(12),
                          child: Padding(
                              padding: const EdgeInsets.all(16),
                              child: Container(
                                  alignment: Alignment.bottomRight,
                                  padding: const EdgeInsets.all(12),
                                  child: Column(
                                    children: [
                                      Image.network(data[index].imageUrl),
                                      Text(data[index].brand,
                                          style: const TextStyle(
                                              fontSize: 30,
                                              fontWeight: FontWeight.w900,
                                              color: Colors.black)),
                                      Text(data[index].type,
                                          style: const TextStyle(
                                              fontSize: 18,
                                              fontWeight: FontWeight.w500,
                                              color: Colors.black)),
                                      Text(data[index].price,
                                          style: const TextStyle(
                                              fontSize: 25,
                                              fontWeight: FontWeight.w200,
                                              color: Colors.black)),
                                    ],
                                  ))));
                    });
              } else if (snapshot.hasError) {
                return Text("${snapshot.error}");
              }
              // By default show a loading spinner.
              return const CircularProgressIndicator();
            },
          ),
        ),
      ),
    );
  }
}

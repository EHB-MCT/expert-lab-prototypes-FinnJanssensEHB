import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
      theme: ThemeData(primarySwatch: Colors.indigo),
      home: Scaffold(
          appBar: AppBar(title: const Text("Flutter - Card With Image & Text")),
          body: bodyContent())));
}

bodyContent() {
  return Card(
      elevation: 6,
      margin: const EdgeInsets.all(12),
      child: Padding(
          padding: const EdgeInsets.all(16),
          child: Container(
              width: double.infinity,
              height: 200,
              decoration: const BoxDecoration(
                  image: DecorationImage(
                      image: NetworkImage("https://picsum.photos/600"),
                      fit: BoxFit.cover)),
              child: Container(
                  alignment: Alignment.bottomRight,
                  padding: const EdgeInsets.all(12),
                  child: Column(
                    children: const [
                      Text("Nike",
                          style: TextStyle(
                              fontSize: 30,
                              fontWeight: FontWeight.w900,
                              color: Colors.black)),
                      Text("Sneakers",
                          style: TextStyle(
                              fontSize: 20,
                              fontWeight: FontWeight.w500,
                              color: Colors.black)),
                    ],
                  )))));
}

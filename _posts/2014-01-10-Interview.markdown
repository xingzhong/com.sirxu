---
layout: post
title:  "Tech Interview"
date:   2014-01-10 12:40:26
categories: Interview 
---

Recently I am start to prepare the job interview for tech company. As usual, there are couple of rounds phone and on-site interviews waiting for me. In general, it will mainly focus on algorithmic question, and I need to come up a solution in short time either through writing on white-board, or Google docs.
Now I would like to share my study notes as my reference.

All the algorithms requires proper data structure support. 
In general, as a job seeker, the following essential data structures are required.

1. Arrays
1. Lists
1. Binary Tree
1. Tree
1. Hash Table
1. Graphs

Based on those abstract data structure, towards application, there are different tricky algorithm to solve the problem efficiently either in time, or in space.
Notable algorithms includes but not limited in the following list,

1. Binary Search
1. Tree Traversal 
1. Sort
1. Dynamical Programming
1. Breadth/Depth first search

.

# Data Structure 
----
The data structure guides us how to store and organize data in a computer. 
Each of them have advantage and disadvantage for specific purpose. 
One good interview question will be make a data structure choice for certain given application.

## Arrays
Array is the most common and basic one in data structure. 
It is basically using consecutive memory block to store data. 
The big advantage to use arrays is simple and efficiency. 
Storing space is linear O(n), plus select existed data by index only use O(1) time.
However the drawback of array is flexibility and scalability. 
It requires consecutive memory block to store data which will make huge problem when you want store big data in a limited memory computer. Moreover, insert/delete the data in array is also very expensive, since it needs to maintain the data space continuation with each other.

In practical, most languages more or less have their build-in implementations.
We won't need to implement it by ourselves.

## Lists
The lists we mentioned here are mostly refer to linked list. Since arrays always take consecutive block memory, people are trying to propose linked list to resolve this drawback. By using non-consecutive memory to store data, we are relaxed from the memory restriction. On contrast, we need additional space in data object to connected each other.

The most basic linked list is single linked list which is we only stored next data position in our data object.

    class node():
  	    def __init__(self, n):
  		    self.data = n
  		    self.next = None

  	class linkedList():
  		def __init__(self):
  			self.head = None
  			self.data = None

  		def prepend(self, node):
  			node.next = self.head
  			self.head = node

  		def traversal(self):
  			node = self.next 
  			while (node) :
  				yield node
  				node = node.next

  		def append(self, node):
  			for n in self.traversal():
  				_
  			n.next = node

In our basic linked list version, one header pointer is enough to save a list of nodes.  
Also `prepend()` and sequence traverse are also cheap. But notice that `append()` operation is pretty expensive O(n), because we only save header pointer in out list structure. 

To overcome this limitation, we could put an additional tail pointer into our data structure. 
By doing that we can quickly access the tail when we want append new data on the right. 

    class linkedList2(linkedList):
    	def __init__(self):
    		self.tail = None
    		super(linkedList2, self).__init__()
    	def prepend(self, node):
    		if self.head is None :
    			self.tail = node
    		super(linkedList2, self).prepend(node)
    	def append(self, node):
    		if self.head is None :
    			self.head = node
    			self.tail = node
    		else :
    			self.tail.next = node
    		self.tail = node

Another interesting linked list is circular list, where head and tail will be combined together. And since it is a circular, it is identical for `prepend()` and `append()` operation.

	class LinkedListCircular():
		def __init__(self):
			self.current = None
		def append(self, node, newNode):
			if node is None :
				newNode.next = newNode
			else:
				newNode.next = node.next
				node.next = newNode
			self.current = newNode
		def traversal(self):
			current = self.current 
			if current is not None:
				yield current 
				current = current.next
				while(current != self.current):
					yield current
					current = current.next

In the final, there is also a very practical linked list called doubly linked list. 
By introducing two pointer `next` and `previous` into the data structure, it allowed us perform more efficient data access.

	class doublyNode():
		self.__init__(self, data):
			self.data = data
			self.prev = None
			self.next = None

	class doublyLinkedList():
		self.__init__(self):
			self.head = None
		self.append()

There are lots of interview questions related to the linked list.





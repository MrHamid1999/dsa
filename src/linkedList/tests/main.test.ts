
import { expect, test, vi } from "vitest";
import { LinkedListNode } from "../main";


test("prepend for linkedlist " , () => {
    const linkedList = new LinkedListNode(15)
    linkedList.prepend(13)
    expect(linkedList).toMatchObject(new LinkedListNode(13 , new LinkedListNode(15)))
})

test("append for linkedlist" , () => {
    const linkedList = new LinkedListNode(5)
    linkedList.append(15)
    expect(linkedList).toMatchObject(new LinkedListNode(5 , new LinkedListNode(15)))
})


test ("search for linkedList" , () => {
    const linkedList = new LinkedListNode(16 , new LinkedListNode(15))
    expect(linkedList.search(12)).toBe(false)
    expect(linkedList.search(15)).toBe(true)
})

test("delete for linkedList" , () => {
    const linkedList = new LinkedListNode(16 , new LinkedListNode(15))
    const secondLinkedList = new LinkedListNode(16)
    linkedList.delete()
    secondLinkedList.delete()
    expect(linkedList).toMatchObject(new LinkedListNode(15))
    expect(secondLinkedList).toMatchObject(secondLinkedList)
})

test("forEach for linkedList" , () => {
    const linkedList = new LinkedListNode(16 , new LinkedListNode(15 , new LinkedListNode(14)))
    let callbackFn = vi.fn()
    linkedList.forEach(callbackFn)
    expect(callbackFn).toHaveBeenCalledWith(16)
    expect(callbackFn).toHaveBeenCalledWith(15)
    expect(callbackFn).toHaveBeenCalledWith(14)
    expect(callbackFn).toHaveBeenCalledTimes(3)
})
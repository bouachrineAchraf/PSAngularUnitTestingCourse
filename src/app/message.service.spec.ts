import { MessageService } from "./message.service"

describe("MessageService", () => {
    let service: MessageService;

    beforeEach(() => {
        service = new MessageService();
    });

    it('should have no message', () => {
        expect(service.messages.length).toBe(0);
    });

    it('should have  a message', () => {
        service.add("achraf");
        expect(service.messages.length).toBe(1);
    });

    it('should clear  all messages', () => {
        service.add("achraf");
        service.clear()
        expect(service.messages.length).toBe(0);
    })
});

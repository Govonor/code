let deliveries = [];

// Function to create a new delivery
function createDelivery(orderId, farmerId, consumerId, deliveryAddress) {
    const newDelivery = {
        id: deliveries.length + 1,
        orderId,
        farmerId,
        consumerId,
        deliveryAddress,
        status: 'Pending', // Initial status
        estimatedDeliveryTime: calculateEstimatedTime(),
        createdAt: new Date(), // Timestamp of creation
        updatedAt: new Date(), // Timestamp of last update
        statusHistory: [{ status: 'Pending', timestamp: new Date() }] // Track status changes
    };
    deliveries.push(newDelivery);
    return newDelivery;
}

// Function to update the delivery status
function updateDeliveryStatus(deliveryId, newStatus) {
    const delivery = deliveries.find(d => d.id === deliveryId);
    if (delivery) {
        delivery.status = newStatus;
        delivery.updatedAt = new Date(); // Update timestamp
        delivery.statusHistory.push({ status: newStatus, timestamp: new Date() }); // Log status change
        sendNotification(delivery.consumerId, `Your delivery status has been updated to: ${newStatus}`);
        return delivery;
    }
    throw new Error('Delivery not found');
}

// Function to cancel a delivery
function cancelDelivery(deliveryId) {
    const delivery = deliveries.find(d => d.id === deliveryId);
    if (delivery) {
        delivery.status = 'Canceled';
        delivery.updatedAt = new Date(); // Update timestamp
        delivery.statusHistory.push({ status: 'Canceled', timestamp: new Date() });
        sendNotification(delivery.consumerId, 'Your delivery has been canceled.');
        return delivery;
    }
    throw new Error('Delivery not found');
}

// Function to get delivery details by ID
function getDeliveryById(deliveryId) {
    const delivery = deliveries.find(d => d.id === deliveryId);
    if (delivery) {
        return delivery;
    }
    throw new Error('Delivery not found');
}

// Function to get all deliveries for a specific consumer
function getDeliveriesByConsumer(consumerId) {
    return deliveries.filter(d => d.consumerId === consumerId);
}

// Function to filter deliveries by status
function filterDeliveriesByStatus(status) {
    return deliveries.filter(d => d.status === status);
}

// Function to calculate estimated delivery time (mock implementation)
function calculateEstimatedTime() {
    const minutes = Math.floor(Math.random() * 60) + 30;
    return `${minutes} minutes`;
}

// Function to track delivery in real-time (mock implementation)
function trackDelivery(deliveryId) {
    const delivery = getDeliveryById(deliveryId);
    return {
        id: delivery.id,
        status: delivery.status,
        estimatedDeliveryTime: delivery.estimatedDeliveryTime,
        createdAt: delivery.createdAt,
        updatedAt: delivery.updatedAt,
        statusHistory: delivery.statusHistory
    };
}

// Mock function to send notifications (placeholder for real implementation)
function sendNotification(consumerId, message) {
    console.log(`Notification to consumer ${consumerId}: ${message}`);
}

// Exporting the delivery functions
module.exports = {
    createDelivery,
    updateDeliveryStatus,
    cancelDelivery,
    getDeliveryById,
    getDeliveriesByConsumer,
    filterDeliveriesByStatus,
    trackDelivery,
};

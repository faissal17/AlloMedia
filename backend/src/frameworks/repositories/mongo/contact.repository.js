const mongoose = require('mongoose');
const entityName = "Contact";

const {
    schemas: {
        contact: contactSchema
    }
} = require('../../database/mongo');

const repository = () => {
    // Schema
    const Contact = mongoose.model(entityName, contactSchema);

    return {
        add: async contact => {
            const mongoObject = new Contact(contact);
            return mongoObject.save();
        },
        update: async contact => {
            const { id, updates } = contact;
            delete contact.id;
            return Contact.findByIdAndUpdate(id, {
                ...updates,
                updatedAt: new Date()
            }, {
                new: true
            });
        },
        delete: async contact => {
            const { id } = contact;
            console.log('repository:', id);
            delete contact.id;
            return Contact.findByIdAndUpdate(id, {
                deletedAt: new Date()
            }, {
                new: true
            });
        },
        getById: async id => {
            const contact = await Contact.findOne({
                _id: id,
                deletedAt: {
                    $exists: false
                }
            });
            if (!contact) {
                throw new Error(`Contact with ID ${id} does not exist or has been deleted.`);
            }
            return contact;
        },
        getByIdAndName: async (id, name) => {
            const contact = await Contact.findOne({
                _id: id,
                name: name,
                deletedAt: {
                    $exists: false
                }
            });

            if (!contact) {
                throw new Error(`Contact with ID ${id} and name ${name} does not exist or has been deleted.`);
            }

            return contact;
        },
        getByIdOrName: async (id, name) => {
            // Validate input
            if (!id && !name) {
                throw new Error('Provide either ID or name');
            }

            const query = {
                deletedAt: {
                    $exists: false
                }
            };

            if (id) {
                query._id = id;
            }

            if (name) {
                query.name = name;
            }

            const contact = await Contact.findOne(query);

            if (!contact) {
                throw new Error(`Contact with ${id ? 'ID ' + id : ''}${id && name ? ' and ' : ''}${name ? 'name ' + name : ''}does not exist or has been deleted.`);
            }

            return contact;
        }
    };
};

module.exports = repository();

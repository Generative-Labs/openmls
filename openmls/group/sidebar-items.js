initSidebarItems({"enum":[["EmptyInputError",""],["HandshakeMessageFormat","Defines whether handshake messages (Proposals & Commits) are encrypted. Application are always encrypted regardless. `Plaintext`: Handshake messages are returned as MLSPlaintext messages `Ciphertext`: Handshake messages are returned as MLSCiphertext messages"],["InvalidMessageError",""],["MLSMessage","Unified message type"],["ManagedGroupError",""],["PendingProposalsError",""],["Removal","This enum lists the 4 different variants of a removal, depending on who the remover and who the leaver is."],["UseAfterEviction",""]],"mod":[["callbacks",""],["codec",""],["config",""],["errors","MLS Group errors`WelcomeError`, `ApplyCommitError`, `DecryptionError`, and `CreateCommitError`."],["errors","MLS Managed Group errors`WelcomeError`, `ApplyCommitError`, `DecryptionError`, and `CreateCommitError`."],["group_context",""],["managed_group",""],["mls_group",""]],"struct":[["GroupConfig","Configuration for an MLS group."],["GroupContext",""],["GroupEpoch",""],["GroupId",""],["ManagedGroup","A `ManagedGroup` represents an [MlsGroup] with an easier, high-level API designed to be used in production. The API exposes high level functions to manage a group by adding/removing members, get the current member list, etc."],["ManagedGroupCallbacks","Collection of callback functions that are passed to a `ManagedGroup` as part of the configurations. All callback functions are optional."],["ManagedGroupConfig","Specifies the configuration parameters for a managed group"],["MlsGroup",""],["UpdatePolicy","Specifies in which intervals the own leaf node should be updated"]],"type":[["AppMessageReceived",""],["AutoSave",""],["CreateCommitResult",""],["ErrorOccurred",""],["InvalidMessageReceived",""],["MemberAdded",""],["MemberRemoved",""],["MemberUpdated",""],["PskReceived",""],["ReInitReceived",""],["ValidateAdd",""],["ValidateRemove",""]]});
// package: viam.service.slam.v1
// file: service/slam/v1/slam.proto

var service_slam_v1_slam_pb = require("../../../service/slam/v1/slam_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var SLAMService = (function () {
  function SLAMService() {}
  SLAMService.serviceName = "viam.service.slam.v1.SLAMService";
  return SLAMService;
}());

SLAMService.GetPosition = {
  methodName: "GetPosition",
  service: SLAMService,
  requestStream: false,
  responseStream: false,
  requestType: service_slam_v1_slam_pb.GetPositionRequest,
  responseType: service_slam_v1_slam_pb.GetPositionResponse
};

SLAMService.GetMap = {
  methodName: "GetMap",
  service: SLAMService,
  requestStream: false,
  responseStream: false,
  requestType: service_slam_v1_slam_pb.GetMapRequest,
  responseType: service_slam_v1_slam_pb.GetMapResponse
};

SLAMService.GetPositionNew = {
  methodName: "GetPositionNew",
  service: SLAMService,
  requestStream: false,
  responseStream: false,
  requestType: service_slam_v1_slam_pb.GetPositionNewRequest,
  responseType: service_slam_v1_slam_pb.GetPositionNewResponse
};

SLAMService.GetPointCloudMap = {
  methodName: "GetPointCloudMap",
  service: SLAMService,
  requestStream: false,
  responseStream: false,
  requestType: service_slam_v1_slam_pb.GetPointCloudMapRequest,
  responseType: service_slam_v1_slam_pb.GetPointCloudMapResponse
};

SLAMService.GetInternalState = {
  methodName: "GetInternalState",
  service: SLAMService,
  requestStream: false,
  responseStream: false,
  requestType: service_slam_v1_slam_pb.GetInternalStateRequest,
  responseType: service_slam_v1_slam_pb.GetInternalStateResponse
};

exports.SLAMService = SLAMService;

function SLAMServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

SLAMServiceClient.prototype.getPosition = function getPosition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SLAMService.GetPosition, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SLAMServiceClient.prototype.getMap = function getMap(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SLAMService.GetMap, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SLAMServiceClient.prototype.getPositionNew = function getPositionNew(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SLAMService.GetPositionNew, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SLAMServiceClient.prototype.getPointCloudMap = function getPointCloudMap(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SLAMService.GetPointCloudMap, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

SLAMServiceClient.prototype.getInternalState = function getInternalState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(SLAMService.GetInternalState, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.SLAMServiceClient = SLAMServiceClient;


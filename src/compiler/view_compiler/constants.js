'use strict';"use strict";
var lang_1 = require('angular2/src/facade/lang');
var compile_metadata_1 = require('../compile_metadata');
var change_detection_1 = require('angular2/src/core/change_detection/change_detection');
var view_1 = require('angular2/src/core/metadata/view');
var view_type_1 = require('angular2/src/core/linker/view_type');
var o = require('../output/output_ast');
var identifiers_1 = require('../identifiers');
function _enumExpression(classIdentifier, value) {
    if (lang_1.isBlank(value))
        return o.NULL_EXPR;
    var name = lang_1.resolveEnumToken(classIdentifier.runtime, value);
    return o.importExpr(new compile_metadata_1.CompileIdentifierMetadata({
        name: classIdentifier.name + "." + name,
        moduleUrl: classIdentifier.moduleUrl,
        runtime: value
    }));
}
var ViewTypeEnum = (function () {
    function ViewTypeEnum() {
    }
    ViewTypeEnum.fromValue = function (value) {
        return _enumExpression(identifiers_1.Identifiers.ViewType, value);
    };
    ViewTypeEnum.HOST = ViewTypeEnum.fromValue(view_type_1.ViewType.HOST);
    ViewTypeEnum.COMPONENT = ViewTypeEnum.fromValue(view_type_1.ViewType.COMPONENT);
    ViewTypeEnum.EMBEDDED = ViewTypeEnum.fromValue(view_type_1.ViewType.EMBEDDED);
    return ViewTypeEnum;
}());
exports.ViewTypeEnum = ViewTypeEnum;
var ViewEncapsulationEnum = (function () {
    function ViewEncapsulationEnum() {
    }
    ViewEncapsulationEnum.fromValue = function (value) {
        return _enumExpression(identifiers_1.Identifiers.ViewEncapsulation, value);
    };
    ViewEncapsulationEnum.Emulated = ViewEncapsulationEnum.fromValue(view_1.ViewEncapsulation.Emulated);
    ViewEncapsulationEnum.Native = ViewEncapsulationEnum.fromValue(view_1.ViewEncapsulation.Native);
    ViewEncapsulationEnum.None = ViewEncapsulationEnum.fromValue(view_1.ViewEncapsulation.None);
    return ViewEncapsulationEnum;
}());
exports.ViewEncapsulationEnum = ViewEncapsulationEnum;
var ChangeDetectorStateEnum = (function () {
    function ChangeDetectorStateEnum() {
    }
    ChangeDetectorStateEnum.fromValue = function (value) {
        return _enumExpression(identifiers_1.Identifiers.ChangeDetectorState, value);
    };
    ChangeDetectorStateEnum.NeverChecked = ChangeDetectorStateEnum.fromValue(change_detection_1.ChangeDetectorState.NeverChecked);
    ChangeDetectorStateEnum.CheckedBefore = ChangeDetectorStateEnum.fromValue(change_detection_1.ChangeDetectorState.CheckedBefore);
    ChangeDetectorStateEnum.Errored = ChangeDetectorStateEnum.fromValue(change_detection_1.ChangeDetectorState.Errored);
    return ChangeDetectorStateEnum;
}());
exports.ChangeDetectorStateEnum = ChangeDetectorStateEnum;
var ChangeDetectionStrategyEnum = (function () {
    function ChangeDetectionStrategyEnum() {
    }
    ChangeDetectionStrategyEnum.fromValue = function (value) {
        return _enumExpression(identifiers_1.Identifiers.ChangeDetectionStrategy, value);
    };
    ChangeDetectionStrategyEnum.CheckOnce = ChangeDetectionStrategyEnum.fromValue(change_detection_1.ChangeDetectionStrategy.CheckOnce);
    ChangeDetectionStrategyEnum.Checked = ChangeDetectionStrategyEnum.fromValue(change_detection_1.ChangeDetectionStrategy.Checked);
    ChangeDetectionStrategyEnum.CheckAlways = ChangeDetectionStrategyEnum.fromValue(change_detection_1.ChangeDetectionStrategy.CheckAlways);
    ChangeDetectionStrategyEnum.Detached = ChangeDetectionStrategyEnum.fromValue(change_detection_1.ChangeDetectionStrategy.Detached);
    ChangeDetectionStrategyEnum.OnPush = ChangeDetectionStrategyEnum.fromValue(change_detection_1.ChangeDetectionStrategy.OnPush);
    ChangeDetectionStrategyEnum.Default = ChangeDetectionStrategyEnum.fromValue(change_detection_1.ChangeDetectionStrategy.Default);
    return ChangeDetectionStrategyEnum;
}());
exports.ChangeDetectionStrategyEnum = ChangeDetectionStrategyEnum;
var ViewConstructorVars = (function () {
    function ViewConstructorVars() {
    }
    ViewConstructorVars.viewUtils = o.variable('viewUtils');
    ViewConstructorVars.parentInjector = o.variable('parentInjector');
    ViewConstructorVars.declarationEl = o.variable('declarationEl');
    return ViewConstructorVars;
}());
exports.ViewConstructorVars = ViewConstructorVars;
var ViewProperties = (function () {
    function ViewProperties() {
    }
    ViewProperties.renderer = o.THIS_EXPR.prop('renderer');
    ViewProperties.projectableNodes = o.THIS_EXPR.prop('projectableNodes');
    ViewProperties.viewUtils = o.THIS_EXPR.prop('viewUtils');
    return ViewProperties;
}());
exports.ViewProperties = ViewProperties;
var EventHandlerVars = (function () {
    function EventHandlerVars() {
    }
    EventHandlerVars.event = o.variable('$event');
    return EventHandlerVars;
}());
exports.EventHandlerVars = EventHandlerVars;
var InjectMethodVars = (function () {
    function InjectMethodVars() {
    }
    InjectMethodVars.token = o.variable('token');
    InjectMethodVars.requestNodeIndex = o.variable('requestNodeIndex');
    InjectMethodVars.notFoundResult = o.variable('notFoundResult');
    return InjectMethodVars;
}());
exports.InjectMethodVars = InjectMethodVars;
var DetectChangesVars = (function () {
    function DetectChangesVars() {
    }
    DetectChangesVars.throwOnChange = o.variable("throwOnChange");
    DetectChangesVars.changes = o.variable("changes");
    DetectChangesVars.changed = o.variable("changed");
    DetectChangesVars.valUnwrapper = o.variable("valUnwrapper");
    return DetectChangesVars;
}());
exports.DetectChangesVars = DetectChangesVars;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1uR1FpMTBMNS50bXAvYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3ZpZXdfY29tcGlsZXIvY29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBdUQsMEJBQTBCLENBQUMsQ0FBQTtBQUNsRixpQ0FBOEQscUJBQXFCLENBQUMsQ0FBQTtBQUNwRixpQ0FHTyxxREFBcUQsQ0FBQyxDQUFBO0FBQzdELHFCQUFnQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2xFLDBCQUF1QixvQ0FBb0MsQ0FBQyxDQUFBO0FBQzVELElBQVksQ0FBQyxXQUFNLHNCQUFzQixDQUFDLENBQUE7QUFDMUMsNEJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFFM0MseUJBQXlCLGVBQTBDLEVBQUUsS0FBVTtJQUM3RSxFQUFFLENBQUMsQ0FBQyxjQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN2QyxJQUFJLElBQUksR0FBRyx1QkFBZ0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVELE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksNENBQXlCLENBQUM7UUFDaEQsSUFBSSxFQUFLLGVBQWUsQ0FBQyxJQUFJLFNBQUksSUFBTTtRQUN2QyxTQUFTLEVBQUUsZUFBZSxDQUFDLFNBQVM7UUFDcEMsT0FBTyxFQUFFLEtBQUs7S0FDZixDQUFDLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFRDtJQUFBO0lBT0EsQ0FBQztJQU5RLHNCQUFTLEdBQWhCLFVBQWlCLEtBQWU7UUFDOUIsTUFBTSxDQUFDLGVBQWUsQ0FBQyx5QkFBVyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ00saUJBQUksR0FBRyxZQUFZLENB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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXJpYWxpemVFbnVtLCBpc0JsYW5rLCByZXNvbHZlRW51bVRva2VufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtDb21waWxlSWRlbnRpZmllck1ldGFkYXRhLCBDb21waWxlVG9rZW5NZXRhZGF0YX0gZnJvbSAnLi4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclN0YXRlLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9jaGFuZ2VfZGV0ZWN0aW9uL2NoYW5nZV9kZXRlY3Rpb24nO1xuaW1wb3J0IHtWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbWV0YWRhdGEvdmlldyc7XG5pbXBvcnQge1ZpZXdUeXBlfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvdmlld190eXBlJztcbmltcG9ydCAqIGFzIG8gZnJvbSAnLi4vb3V0cHV0L291dHB1dF9hc3QnO1xuaW1wb3J0IHtJZGVudGlmaWVyc30gZnJvbSAnLi4vaWRlbnRpZmllcnMnO1xuXG5mdW5jdGlvbiBfZW51bUV4cHJlc3Npb24oY2xhc3NJZGVudGlmaWVyOiBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhLCB2YWx1ZTogYW55KTogby5FeHByZXNzaW9uIHtcbiAgaWYgKGlzQmxhbmsodmFsdWUpKSByZXR1cm4gby5OVUxMX0VYUFI7XG4gIHZhciBuYW1lID0gcmVzb2x2ZUVudW1Ub2tlbihjbGFzc0lkZW50aWZpZXIucnVudGltZSwgdmFsdWUpO1xuICByZXR1cm4gby5pbXBvcnRFeHByKG5ldyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKHtcbiAgICBuYW1lOiBgJHtjbGFzc0lkZW50aWZpZXIubmFtZX0uJHtuYW1lfWAsXG4gICAgbW9kdWxlVXJsOiBjbGFzc0lkZW50aWZpZXIubW9kdWxlVXJsLFxuICAgIHJ1bnRpbWU6IHZhbHVlXG4gIH0pKTtcbn1cblxuZXhwb3J0IGNsYXNzIFZpZXdUeXBlRW51bSB7XG4gIHN0YXRpYyBmcm9tVmFsdWUodmFsdWU6IFZpZXdUeXBlKTogby5FeHByZXNzaW9uIHtcbiAgICByZXR1cm4gX2VudW1FeHByZXNzaW9uKElkZW50aWZpZXJzLlZpZXdUeXBlLCB2YWx1ZSk7XG4gIH1cbiAgc3RhdGljIEhPU1QgPSBWaWV3VHlwZUVudW0uZnJvbVZhbHVlKFZpZXdUeXBlLkhPU1QpO1xuICBzdGF0aWMgQ09NUE9ORU5UID0gVmlld1R5cGVFbnVtLmZyb21WYWx1ZShWaWV3VHlwZS5DT01QT05FTlQpO1xuICBzdGF0aWMgRU1CRURERUQgPSBWaWV3VHlwZUVudW0uZnJvbVZhbHVlKFZpZXdUeXBlLkVNQkVEREVEKTtcbn1cblxuZXhwb3J0IGNsYXNzIFZpZXdFbmNhcHN1bGF0aW9uRW51bSB7XG4gIHN0YXRpYyBmcm9tVmFsdWUodmFsdWU6IFZpZXdFbmNhcHN1bGF0aW9uKTogby5FeHByZXNzaW9uIHtcbiAgICByZXR1cm4gX2VudW1FeHByZXNzaW9uKElkZW50aWZpZXJzLlZpZXdFbmNhcHN1bGF0aW9uLCB2YWx1ZSk7XG4gIH1cbiAgc3RhdGljIEVtdWxhdGVkID0gVmlld0VuY2Fwc3VsYXRpb25FbnVtLmZyb21WYWx1ZShWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCk7XG4gIHN0YXRpYyBOYXRpdmUgPSBWaWV3RW5jYXBzdWxhdGlvbkVudW0uZnJvbVZhbHVlKFZpZXdFbmNhcHN1bGF0aW9uLk5hdGl2ZSk7XG4gIHN0YXRpYyBOb25lID0gVmlld0VuY2Fwc3VsYXRpb25FbnVtLmZyb21WYWx1ZShWaWV3RW5jYXBzdWxhdGlvbi5Ob25lKTtcbn1cblxuZXhwb3J0IGNsYXNzIENoYW5nZURldGVjdG9yU3RhdGVFbnVtIHtcbiAgc3RhdGljIGZyb21WYWx1ZSh2YWx1ZTogQ2hhbmdlRGV0ZWN0b3JTdGF0ZSk6IG8uRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIF9lbnVtRXhwcmVzc2lvbihJZGVudGlmaWVycy5DaGFuZ2VEZXRlY3RvclN0YXRlLCB2YWx1ZSk7XG4gIH1cbiAgc3RhdGljIE5ldmVyQ2hlY2tlZCA9IENoYW5nZURldGVjdG9yU3RhdGVFbnVtLmZyb21WYWx1ZShDaGFuZ2VEZXRlY3RvclN0YXRlLk5ldmVyQ2hlY2tlZCk7XG4gIHN0YXRpYyBDaGVja2VkQmVmb3JlID0gQ2hhbmdlRGV0ZWN0b3JTdGF0ZUVudW0uZnJvbVZhbHVlKENoYW5nZURldGVjdG9yU3RhdGUuQ2hlY2tlZEJlZm9yZSk7XG4gIHN0YXRpYyBFcnJvcmVkID0gQ2hhbmdlRGV0ZWN0b3JTdGF0ZUVudW0uZnJvbVZhbHVlKENoYW5nZURldGVjdG9yU3RhdGUuRXJyb3JlZCk7XG59XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneUVudW0ge1xuICBzdGF0aWMgZnJvbVZhbHVlKHZhbHVlOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSk6IG8uRXhwcmVzc2lvbiB7XG4gICAgcmV0dXJuIF9lbnVtRXhwcmVzc2lvbihJZGVudGlmaWVycy5DaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgdmFsdWUpO1xuICB9XG4gIHN0YXRpYyBDaGVja09uY2UgPSBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneUVudW0uZnJvbVZhbHVlKENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkNoZWNrT25jZSk7XG4gIHN0YXRpYyBDaGVja2VkID0gQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lFbnVtLmZyb21WYWx1ZShDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5DaGVja2VkKTtcbiAgc3RhdGljIENoZWNrQWx3YXlzID0gQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lFbnVtLmZyb21WYWx1ZShDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5DaGVja0Fsd2F5cyk7XG4gIHN0YXRpYyBEZXRhY2hlZCA9IENoYW5nZURldGVjdGlvblN0cmF0ZWd5RW51bS5mcm9tVmFsdWUoQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGV0YWNoZWQpO1xuICBzdGF0aWMgT25QdXNoID0gQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lFbnVtLmZyb21WYWx1ZShDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gpO1xuICBzdGF0aWMgRGVmYXVsdCA9IENoYW5nZURldGVjdGlvblN0cmF0ZWd5RW51bS5mcm9tVmFsdWUoQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCk7XG59XG5cbmV4cG9ydCBjbGFzcyBWaWV3Q29uc3RydWN0b3JWYXJzIHtcbiAgc3RhdGljIHZpZXdVdGlscyA9IG8udmFyaWFibGUoJ3ZpZXdVdGlscycpO1xuICBzdGF0aWMgcGFyZW50SW5qZWN0b3IgPSBvLnZhcmlhYmxlKCdwYXJlbnRJbmplY3RvcicpO1xuICBzdGF0aWMgZGVjbGFyYXRpb25FbCA9IG8udmFyaWFibGUoJ2RlY2xhcmF0aW9uRWwnKTtcbn1cblxuZXhwb3J0IGNsYXNzIFZpZXdQcm9wZXJ0aWVzIHtcbiAgc3RhdGljIHJlbmRlcmVyID0gby5USElTX0VYUFIucHJvcCgncmVuZGVyZXInKTtcbiAgc3RhdGljIHByb2plY3RhYmxlTm9kZXMgPSBvLlRISVNfRVhQUi5wcm9wKCdwcm9qZWN0YWJsZU5vZGVzJyk7XG4gIHN0YXRpYyB2aWV3VXRpbHMgPSBvLlRISVNfRVhQUi5wcm9wKCd2aWV3VXRpbHMnKTtcbn1cblxuZXhwb3J0IGNsYXNzIEV2ZW50SGFuZGxlclZhcnMgeyBzdGF0aWMgZXZlbnQgPSBvLnZhcmlhYmxlKCckZXZlbnQnKTsgfVxuXG5leHBvcnQgY2xhc3MgSW5qZWN0TWV0aG9kVmFycyB7XG4gIHN0YXRpYyB0b2tlbiA9IG8udmFyaWFibGUoJ3Rva2VuJyk7XG4gIHN0YXRpYyByZXF1ZXN0Tm9kZUluZGV4ID0gby52YXJpYWJsZSgncmVxdWVzdE5vZGVJbmRleCcpO1xuICBzdGF0aWMgbm90Rm91bmRSZXN1bHQgPSBvLnZhcmlhYmxlKCdub3RGb3VuZFJlc3VsdCcpO1xufVxuXG5leHBvcnQgY2xhc3MgRGV0ZWN0Q2hhbmdlc1ZhcnMge1xuICBzdGF0aWMgdGhyb3dPbkNoYW5nZSA9IG8udmFyaWFibGUoYHRocm93T25DaGFuZ2VgKTtcbiAgc3RhdGljIGNoYW5nZXMgPSBvLnZhcmlhYmxlKGBjaGFuZ2VzYCk7XG4gIHN0YXRpYyBjaGFuZ2VkID0gby52YXJpYWJsZShgY2hhbmdlZGApO1xuICBzdGF0aWMgdmFsVW53cmFwcGVyID0gby52YXJpYWJsZShgdmFsVW53cmFwcGVyYCk7XG59XG4iXX0=
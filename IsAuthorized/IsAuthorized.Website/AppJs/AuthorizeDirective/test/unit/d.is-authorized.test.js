/// <reference path="../../../../Scripts/jasmine/jasmine.js"  />
/// <reference path="../../../../Scripts/jquery-2.1.1.min.js" />
/// <reference path="../../../../Scripts/angular.min.js"      />
/// <reference path="../../../../Scripts/angular-mocks.js"    />
/// <reference path="../../src/angular-maga-library.js" />

describe('IsAuthorized: ', function () {
	var rootScope, compile, target, scope;

	beforeEach(function () {
		module('maga-library');
		inject(function ($compile, _$rootScope_) {
			compile = $compile;
			rootScope = _$rootScope_;

		});
	});

	describe('When a button has the directive', function () {

		it('it should be disabled if the user is not authorized', function () {
			scope = rootScope.$new();
			scope.roles = ['user'];
			scope.yourRoles = ['admin'];

			target = compile('<button is-authorized for-roles="roles" your-roles="yourRoles"></button>')(scope);
			scope.$digest();

			expect($(target).attr('disabled')).toBeTruthy();
		});

		it('it should be enabled if the user is authorized', function () {
			scope = rootScope.$new();
			scope.roles = ['admin'];
			scope.yourRoles = ['admin'];

			target = compile('<button is-authorized for-roles="roles" your-roles="yourRoles"></button>')(scope);
			scope.$digest();

			expect($(target).attr('disabled')).toBeFalsy();
		});

	});

	describe('When a input has the directive', function () {

		it('it should be readonly if the user is not authorized', function () {
			scope = rootScope.$new();
			scope.roles = ['user'];
			scope.yourRoles = ['admin'];

			target = compile('<input is-authorized for-roles="roles" your-roles="yourRoles" />')(scope);
			scope.$digest();

			expect($(target).attr('readonly')).toBeTruthy();
		});

		it('it shouldnt be readonly if the user is authorized', function () {
			scope = rootScope.$new();
			scope.roles = ['admin'];
			scope.yourRoles = ['admin'];

			target = compile('<input is-authorized for-roles="roles" your-roles="yourRoles" />')(scope);
			scope.$digest();

			expect($(target).attr('readonly')).toBeFalsy();
		});

	});

	describe('When a textarea has the directive', function () {

		it('it should be readonly if the user is authorized', function () {
			scope = rootScope.$new();
			scope.roles = ['user'];
			scope.yourRoles = ['admin'];

			target = compile('<textarea is-authorized for-roles="roles" your-roles="yourRoles"></textarea>')(scope);
			scope.$digest();

			expect($(target).attr('readonly')).toBeTruthy();
		});

		it('it shouldnt be readonly if the user is authorized', function () {
			scope = rootScope.$new();
			scope.roles = ['admin'];
			scope.yourRoles = ['admin'];

			target = compile('<textarea is-authorized for-roles="roles" your-roles="yourRoles"></textarea>')(scope);
			scope.$digest();

			expect($(target).attr('readonly')).toBeFalsy();
		});

	});

	describe('When a form has the directive', function () {

		it('it should be readonly every input and textarea and disabled every button if the user is not authorized', function () {
			scope = rootScope.$new();
			scope.roles = ['user'];
			scope.yourRoles = ['admin'];

			target = compile('<form is-authorized for-roles="roles" your-roles="yourRoles"><textarea class="textArea"></textarea><input type="text" class="input" /><button class="button"></button></form>')(scope);
			scope.$digest();

			expect($(target).find('.textArea').attr('readonly')).toBeTruthy();
			expect($(target).find('.input').attr('readonly')).toBeTruthy();
			expect($(target).find('.button').attr('disabled')).toBeTruthy();
		});

		it('it shouldnt be readonly every input and textarea and disabled every button if the user is authorized', function () {
			scope = rootScope.$new();
			scope.roles = ['admin'];
			scope.yourRoles = ['admin'];

			target = compile('<form is-authorized for-roles="roles" your-roles="yourRoles"><textarea class="textArea"></textarea><input type="text" class="input" /><button class="button"></button></form>')(scope);
			scope.$digest();

			expect($(target).find('.textArea').attr('readonly')).toBeFalsy();
			expect($(target).find('.input').attr('readonly')).toBeFalsy();
			expect($(target).find('.button').attr('disabled')).toBeFalsy();
		});

	});

	describe('When another tag has the directive', function () {

		it('it should be removed if the user is not authorized', function () {
			scope = rootScope.$new();
			scope.roles = ['user'];
			scope.yourRoles = ['admin'];

			target = compile('<div id="parent"><div class="child" is-authorized for-roles="roles" your-roles="yourRoles"></div></div>')(scope);
			scope.$digest();
			expect(target.find('.child').length).toBe(0);
		});

		it('it shouldnt be removed if the user is not authorized', function () {
			scope = rootScope.$new();
			scope.roles = ['admin'];
			scope.yourRoles = ['admin'];

			target = compile('<div id="parent"><div class="child" is-authorized for-roles="roles" your-roles="yourRoles"></div></div>')(scope);
			scope.$digest();

			expect(target.find('.child').length).toBe(1);
		});

	});

	describe('When there is the directive on a tag', function () {

		it('it should be possible specify multiple roles to be granted access', function () {
			scope = rootScope.$new();
			scope.roles = ['user', 'admin'];
			scope.yourRoles = ['admin'];

			target = compile('<div id="parent"><div class="child" is-authorized for-roles="roles" your-roles="yourRoles"></div></div>')(scope);
			scope.$digest();
			expect(target.find('.child').length).toBe(1);
		});

	});

});